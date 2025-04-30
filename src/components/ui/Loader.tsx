import '../../styles/ui.css';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent' | 'white';
}

const Loader = ({ size = 'medium', color = 'primary' }: LoaderProps) => {
  return (
    <div className={`loader loader-${size} loader-${color}`}>
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;