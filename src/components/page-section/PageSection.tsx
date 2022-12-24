import SectionTitle from '@components/section-title';
import { PageSectionProps } from './PageSection.interfaces';

const PageSection = ({ title, actionButtons, children }: PageSectionProps) => {
  return (
    <div className="relative">
      {/* Background color divider */}
      <div className="absolute w-full h-80 z-0 left-0 top-0 bg-ffffff/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 pb-28 pt-20">
        <div className="mb-10">
          <div className="flex justify-between items-center">
            <SectionTitle title={title} />

            {actionButtons}
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default PageSection;
