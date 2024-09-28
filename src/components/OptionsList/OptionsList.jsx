import OptionItem from '../OptionItem/OptionItem';
import css from './OptionsList.module.css';
import { capitalizeFirstLetter } from '../../utils/utils';
import {
  BsCupHot,
  BsCupStraw,
  BsDiagram3,
  BsDisplay,
  BsDroplet,
  BsFire,
  BsFuelPump,
  BsReverseLayoutSidebarReverse,
  BsSnow,
  BsUiRadios,
  BsWind,
} from 'react-icons/bs';

const OptionsList = ({ options, variant }) => {
  const {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = options || {};

  return (
    <div>
      <ul className={css.optionsList}>
        <li>
          <OptionItem variant={variant}>
            <BsDiagram3 className={css.optionsIcon} />
            <p>{capitalizeFirstLetter(`${transmission}`) || 'N/A'}</p>
          </OptionItem>
        </li>
        <li>
          <OptionItem variant={variant}>
            <BsFuelPump className={css.optionsIcon} />
            <p>{capitalizeFirstLetter(`${engine}`) || 'N/A'}</p>
          </OptionItem>
        </li>
        {AC && (
          <li>
            <OptionItem variant={variant}>
              <BsWind className={css.optionsIcon} />
              <p>AC</p>
            </OptionItem>
          </li>
        )}
        {bathroom && (
          <li>
            <OptionItem variant={variant}>
              <BsDroplet className={css.optionsIcon} />
              <p>Bathroom</p>
            </OptionItem>
          </li>
        )}
        {kitchen && (
          <li>
            <OptionItem variant={variant}>
              <BsCupHot className={css.optionsIcon} />
              <p>Kitchen</p>
            </OptionItem>
          </li>
        )}
        {TV && (
          <li>
            <OptionItem variant={variant}>
              <BsDisplay className={css.optionsIcon} />
              <p>TV</p>
            </OptionItem>
          </li>
        )}
        {radio && (
          <li>
            <OptionItem variant={variant}>
              <BsUiRadios className={css.optionsIcon} />
              <p>Radio</p>
            </OptionItem>
          </li>
        )}
        {water && (
          <li>
            <OptionItem variant={variant}>
              <BsCupStraw className={css.optionsIcon} />
              <p>Water</p>
            </OptionItem>
          </li>
        )}
        {refrigerator && (
          <li>
            <OptionItem variant={variant}>
              <BsSnow className={css.optionsIcon} />
              <p>Refrigerator</p>
            </OptionItem>
          </li>
        )}
        {microwave && (
          <li>
            <OptionItem variant={variant}>
              <BsReverseLayoutSidebarReverse className={css.optionsIcon} />
              <p>Microwave</p>
            </OptionItem>
          </li>
        )}
        {gas && (
          <li>
            <OptionItem variant={variant}>
              <BsFire className={css.optionsIcon} />
              <p>Gas</p>
            </OptionItem>
          </li>
        )}
      </ul>
    </div>
  );
};

export default OptionsList;
