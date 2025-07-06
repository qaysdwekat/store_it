'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { useState } from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Models } from 'node-appwrite';
import { actionsDropdownItems } from '@/constants';
import { constructDownloadUrl } from '@/lib/utils';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';
import {
  deleteFile,
  renameFile,
  updateFileUsers,
} from '@/lib/actions/file.actions';
import { usePathname } from 'next/navigation';
import { FileDetails, ShareInput } from './ActionModalContent';

const ActionsDropdown = ({ file }: { file: Models.Document }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [action, setAction] = useState<ActionType | null>(null);
  const [name, setName] = useState(file.name);
  const [isLoading, setIsLoading] = useState(false);
  const [shareEmails, setShareEmails] = useState<string[]>([]);

  const path = usePathname();
  const closeAllModals = () => {
    setIsModelOpen(false);
    setIsDropdownOpen(false);
    setAction(null);
    setName(file.name);
    setShareEmails([]);
  };

  const handleRemoveUser = async (email: string) => {
    const updatedEmails = shareEmails.filter((e) => e !== email);
    const success = await updateFileUsers({
      fileId: file.$id,
      emails: updatedEmails,
      path,
    });
    if (success) {
      setShareEmails(updatedEmails);
      toast.success('User removed from file');
    } else {
      toast.error('Failed to remove user from file');
    }
  };

  const handleAction = async () => {
    if (!action) return null;

    setIsLoading(true);
    let success = false;
    const actions = {
      rename: async () =>
        await renameFile({
          fileId: file.$id,
          name,
          extension: file.extension,
          path,
        }),
      share: async () =>
        await updateFileUsers({
          fileId: file.$id,
          emails: shareEmails,
          path,
        }),
      delete: async () =>
        await deleteFile({
          fileId: file.$id,
          bucketFileId: file.bucketFileId,
          path,
        }),
    };
    success = await actions[action.value as keyof typeof actions]();
    if (success) {
      toast.success(`File ${action.value} successfully`);
      closeAllModals();
    } else {
      toast.error(`Failed to ${action.value}`);
    }
    setIsLoading(false);
  };

  const renderDialogContent = () => {
    if (!action) return null;
    const { value, label } = action;
    return (
      <DialogContent className=" shad-dialog button bg-white">
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle className="text-center text-light-100">
            {label}
          </DialogTitle>
          {value === 'rename' && (
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          {value === 'delete' && (
            <DialogDescription className="delete-confirmation ">
              Are you sure you want to delete{' '}
              <span className="delete-file-name">{name}</span>?
            </DialogDescription>
          )}
          {value === 'details' && <FileDetails file={file} />}
          {value === 'share' && (
            <ShareInput
              file={file}
              onRemoveUser={handleRemoveUser}
              onInputChange={setShareEmails}
            />
          )}
        </DialogHeader>
        {['rename', 'delete', 'share'].includes(value) && (
          <DialogFooter className="flex flex-col gap-3 md:flex-row">
            <Button className="modal-cancel-button" onClick={closeAllModals}>
              Cancel
            </Button>
            <Button className="modal-submit-button" onClick={handleAction}>
              <p className="capitalize text-white">{value}</p>
              {isLoading && (
                <Image
                  src="/assets/icons/loader.svg"
                  alt="loader"
                  width={20}
                  height={20}
                  className="animate-spin"
                />
              )}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    );
  };
  return (
    <Dialog open={isModelOpen} onOpenChange={setIsModelOpen}>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger className="shad-no-focus">
          <Image
            src="/assets/icons/dots.svg"
            alt="dots"
            width={34}
            height={34}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuLabel className="max-w-[200px] truncate">
            {file.name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {actionsDropdownItems.map((item) => (
            <DropdownMenuItem
              key={item.value}
              className="shad-dropdown-item"
              onClick={() => {
                setAction(item);
                if (
                  ['rename', 'delete', 'share', 'details'].includes(item.value)
                ) {
                  setIsModelOpen(true); // Open the dialog when an action is selected
                  setIsDropdownOpen(false); // Close the dropdown after action is selected
                }
              }}
            >
              {item.value === 'download' ? (
                <Link
                  href={constructDownloadUrl(file.bucketFileId)}
                  download={file.name}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                  {item.label}
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                  {item.label}
                </div>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {renderDialogContent()}
    </Dialog>
  );
};

export default ActionsDropdown;
