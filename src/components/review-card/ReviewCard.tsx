import { ReviewInterface } from '@interfaces/Review.interfaces';
import Image from 'next/image';
import dayjs from 'dayjs';
import StarIcon from '@components/icons/star/Star';

const ReviewCard = ({
  author_details,
  content,
  created_at,
}: ReviewInterface) => {
  return (
    <div className="p-6 rounded-lg bg-f9f9f9 shadow-md">
      <div className="flex items-center mb-6">
        <Image
          src={`/image/w45${author_details.avatar_path}`}
          alt={author_details.name}
          width={45}
          height={45}
          className="rounded-full mr-4"
        />

        <div className="grow">
          <h5>{author_details.name}</h5>
          <span>{dayjs(created_at).format('MMMM DD, YYYY')}</span>
        </div>

        <div className="flex rounded-md py-3 pl-2 pr-4 bg-c4c4c4/30">
          <StarIcon size={17} className="fill-ffb802 mr-1" />

          <span className="text-000000 text-3xl font-semibold">
            {author_details.rating}
          </span>
        </div>
      </div>

      <p className="italic text-xs text-000000 leading-5">{content}</p>
    </div>
  );
};

export default ReviewCard;
