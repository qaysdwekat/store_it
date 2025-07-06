import Chart from '@/components/Chart';
import { getFiles, getTotalSpace } from '@/lib/actions/file.actions';
import { Models } from 'node-appwrite';
import Link from 'next/link';
import Thumbnail from '@/components/Thumbnail';
import ActionsDropdown from '@/components/ActionsDropdown';
import FormattedDateTime from '@/components/FormattedDateTime';
import { convertFileSize, formatDateTime, getUsageSummary } from '@/lib/utils';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const Home = async () => {
  const [files, totalSpace] = await Promise.all([
    getFiles({ types: [], limit: 10 }),
    getTotalSpace(),
  ]);
  const usageSummary = getUsageSummary(totalSpace);

  console.log(`files: ${files}`);
  return (
    <div className="dashboard-container">
      <section>
        {totalSpace && <Chart used={totalSpace.used} max={totalSpace.all} />}
        <div className="dashboard-summary-list">
          {usageSummary &&
            usageSummary.map((item) => (
              <div key={item.title} className="dashboard-summary-card">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="summary-type-icon"
                />
                <div className="flex flex-col items-center gap-2">
                  <p className="summary-type-size">
                    {convertFileSize(item.size)}
                  </p>
                  <p className="summary-type-title">{item.title}</p>
                  <Separator className="mb-4 mt-2 bg-light-200/20" />
                  <p className="subtitle-1 text-light-200">Last update</p>
                  <p className="recent-file-date">
                    {formatDateTime(item.latestDate)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="dashboard-recent-files">
        {files && files.total > 0 ? (
          files.documents.map((file: Models.Document) => (
            <Link
              key={file.$id}
              href={file.url}
              target="_blank"
              className="flex cursor-pointer flex-col bg-white p-2 shadow-sm transition-all hover:shadow-drop-3"
            >
              <div className="recent-file-details ">
                <div className="flex flex-row items-center gap-4">
                  <Thumbnail
                    type={file.type}
                    extension={file.extension}
                    url={file.url}
                    className="!size-16"
                    imageClassName="!size-8"
                  />
                  <div className="file-card-details">
                    <p className="recent-file-name">{file.name}</p>
                    <FormattedDateTime
                      date={file.$createdAt}
                      className="recent-file-date"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <ActionsDropdown file={file} />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="empty-list">No files uploaded</p>
        )}
      </section>
    </div>
  );
};

export default Home;
