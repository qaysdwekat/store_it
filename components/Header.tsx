import { Button } from './ui/button';
import Image from 'next/image';
import Search from './Search';
import FileUploader from './FileUploader';
import { signOut } from '@/lib/actions/user.actions';

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form>
          <Button
            type="submit"
            className="sign-out-button"
            onClick={async () => {
              'use server';
              await signOut();
            }}
          >
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
