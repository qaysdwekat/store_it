'use server';

import { createAdminClient, createSessionClient } from '@/lib/appwrite';
import { appwriteConfig } from '@/lib/appwrite/config';
import { ID, Query } from 'node-appwrite';
import { parseStringify } from '../utils';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const getUserByEmail = async (email: string) => {
  console.log('Get User By Email Function');
  const { databases } = await createAdminClient();
  const user = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal('email', [email])],
  );

  return user.documents.length > 0 ? user.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const sendEmailVerificationOtp = async (email: string) => {
  const { account } = await createAdminClient();
  try {
    const session = await account.createEmailToken(ID.unique(), email);
    return session.userId;
  } catch (error) {
    throw handleError(error, 'Failed to send email verification OTP');
  }
};

export const createUserAccount = async (fullName: string, email: string) => {
  console.log('Create User Account Function');
  const existingUser = await getUserByEmail(email);
  console.log('Existing User', existingUser);
  const accountId = await sendEmailVerificationOtp(email);
  if (!accountId) throw new Error('Failed to send email verification OTP');

  if (!existingUser) {
    const { databases } = await createAdminClient();
    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        fullName,
        email,
        avatar:
          'https://i.pinimg.com/280x280_RS/e9/11/56/e91156662dfc8384636cf993bb2e2037.jpg',
        accountId,
      },
    );
  }

  return parseStringify({ accountId });
};

export const verifyOtp = async (accountId: string, otp: string) => {
  const { account } = await createAdminClient();
  try {
    const session = await account.createSession(accountId, otp);
    (await cookies()).set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    throw handleError(error, 'Failed to verify OTP');
  }
};

export const getCurrentUser = async () => {
  try {
    const { databases, account } = await createSessionClient();
    const result = await account.get();

    const user = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal('accountId', result.$id)],
    );
    return user.documents.length > 0 ? parseStringify(user.documents[0]) : null;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    const { account } = await createSessionClient();

    await account.deleteSession('current');
    (await cookies()).delete('appwrite-session');
  } catch (error) {
    throw handleError(error, 'Failed to sign out');
  } finally {
    redirect('/sign-in');
  }
};

export const signIn = async (email: string) => {
  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      await sendEmailVerificationOtp(email);
      return parseStringify({ accountId: existingUser.accountId });
    }
    return parseStringify({ accountId: null, error: 'User not found' });
  } catch (error) {
    handleError(error, 'Failed to sign in');
  }
};
