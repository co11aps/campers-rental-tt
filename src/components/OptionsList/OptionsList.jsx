import OptionItem from '../OptionItem/OptionItem';
import css from './OptionsList.module.css';
import {
  BsBadgeWc,
  BsCupHot,
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

const OptionsList = ({ options }) => {
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
  } = options;

  const capitalizeFirstLetter = str => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <ul className={css.optionsList}>
        <li>
          <OptionItem>
            <BsDiagram3 className={css.optionsIcon} />
            <p>{capitalizeFirstLetter(`${transmission}`)}</p>
          </OptionItem>
        </li>
        <li>
          <OptionItem>
            <BsFuelPump className={css.optionsIcon} />
            <p>{capitalizeFirstLetter(`${engine}`)}</p>
          </OptionItem>
        </li>
        {AC && (
          <li>
            <OptionItem>
              <BsWind className={css.optionsIcon} />
              <p>AC</p>
            </OptionItem>
          </li>
        )}
        {bathroom && (
          <li>
            <OptionItem>
              <BsBadgeWc className={css.optionsIcon} />
              <p>Bathroom</p>
            </OptionItem>
          </li>
        )}
        {kitchen && (
          <li>
            <OptionItem>
              <BsCupHot className={css.optionsIcon} />
              <p>Kitchen</p>
            </OptionItem>
          </li>
        )}
        {TV && (
          <li>
            <OptionItem>
              <BsDisplay className={css.optionsIcon} />
              <p>TV</p>
            </OptionItem>
          </li>
        )}
        {radio && (
          <li>
            <OptionItem>
              <BsUiRadios className={css.optionsIcon} />
              <p>Radio</p>
            </OptionItem>
          </li>
        )}
        {water && (
          <li>
            <OptionItem>
              <BsDroplet className={css.optionsIcon} />
              <p>Water</p>
            </OptionItem>
          </li>
        )}
        {refrigerator && (
          <li>
            <OptionItem>
              <BsSnow className={css.optionsIcon} />
              <p>Refrigerator</p>
            </OptionItem>
          </li>
        )}
        {microwave && (
          <li>
            <OptionItem>
              <BsReverseLayoutSidebarReverse className={css.optionsIcon} />
              <p>Microwave</p>
            </OptionItem>
          </li>
        )}
        {gas && (
          <li>
            <OptionItem>
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
