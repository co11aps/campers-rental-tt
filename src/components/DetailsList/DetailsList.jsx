import css from './DetailsList.module.css';
import { capitalizeFirstLetter } from '../../utils/utils';

const DetailsList = ({ data }) => {
  const { form, length, width, height, tank, consumption } = data || {};
  return (
    <ul className={css.detailsList}>
      <li>
        <p>Form</p>
        <p>{capitalizeFirstLetter(`${form}`)}</p>
      </li>
      <li>
        <p>Length</p>
        <p>{length}</p>
      </li>
      <li>
        <p>Width</p>
        <p>{width}</p>
      </li>
      <li>
        <p>Height</p>
        <p>{height}</p>
      </li>
      <li>
        <p>Tank</p>
        <p>{tank}</p>
      </li>
      <li>
        <p>Consumption</p>
        <p>{consumption}</p>
      </li>
    </ul>
  );
};

export default DetailsList;
