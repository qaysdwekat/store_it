import { Models } from 'node-appwrite';
import Thumbnail from './Thumbnail';
import FormattedDateTime from './FormattedDateTime';
import { convertFileSize, formatDateTime } from '@/lib/utils';
import { Input } from './ui/input';
import Image from 'next/image';
import { Button } from './ui/button';

const ImageThumbnail = ({ file }: { file: Models.Document }) => {
  return (
    <div className="file-details-thumbnail">
      <Thumbnail
        type={file.type}
        extension={file.extension}
        url={file.url}
        className="!size-14"
        imageClassName="!size-8"
      />
      <div className="flex flex-col text-start">
        <p className="subtitle-2 mb-1">{file.name}</p>
        <FormattedDateTime date={file.$createdAt} className="caption" />
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-start gap-2">
      <p className="file-details-label text-start">{label}</p>
      <p className="file-details-value text-start">{value}</p>
    </div>
  );
};
export const FileDetails = ({ file }: { file: Models.Document }) => {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className="space-y-4 px-2 pt-2">
        <DetailRow label="Formate:" value={file.extension} />
        <DetailRow label="Dimensions:" value={convertFileSize(file.size)} />
        <DetailRow label="Owner:" value={file.owner.fullName} />
        <DetailRow
          label="Last Modified:"
          value={formatDateTime(file.$updatedAt)}
        />
      </div>
    </>
  );
};

interface ShareInputProps {
  file: Models.Document;
  onRemoveUser: (email: string) => void;
  onInputChange: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ShareInput = ({
  file,
  onRemoveUser,
  onInputChange,
}: ShareInputProps) => {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className="share-wrapper">
        <p className="subtitle-2">Share file with other users</p>
        <div className="share-input-wrapper">
          <Input
            type="email"
            placeholder="Enter email address"
            onChange={(e) => onInputChange(e.target.value.trim().split(','))}
            className="share-input-field"
          />
          <div className="pt-4">
            <div className="flex justify-between">
              <p className="subtitle-2 text-light-100">Shared with users</p>
              <p className="subtitle-2 text-light-200">
                {file.users.length} users
              </p>
            </div>
            <ul className="pt-2">
              {file.users.map((email: string) => (
                <li key={email} className="flex justify-between gap-2">
                  <p className="subtitle-2">{email}</p>
                  <Button
                    onClick={() => onRemoveUser(email)}
                    className="share-remove-user"
                  >
                    <Image
                      src="/assets/icons/remove.svg"
                      alt="remove"
                      width={24}
                      height={24}
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
