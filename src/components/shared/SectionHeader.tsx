interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true, 
  gradient = true 
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          gradient 
            ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' 
            : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
