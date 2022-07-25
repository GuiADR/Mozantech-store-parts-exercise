import { Spinner } from "./styles";

interface Props {
  maxSize?: boolean;
}
const LoadingSpinner: React.FC<Props> = ({ maxSize = true }) => {
  return (
    <Spinner className={(maxSize) ? 'maxSize' : ''}>
      <div></div>
    </Spinner>
  );
}

export default LoadingSpinner;