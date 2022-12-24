import { SectionTitleProps } from './SectionTitle.interfaces';

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div>
      <div className="w-28 h-1.5 mb-3 bg-e74c3c" />
      <h2 className="text-2xl font-semibold text-ffffff">{title}</h2>
    </div>
  );
};

export default SectionTitle;
