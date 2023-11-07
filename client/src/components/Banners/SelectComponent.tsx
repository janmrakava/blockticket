/* eslint-disable react/prop-types */
import { FormControl, MenuItem, Select } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import useStyles from '../../styles/styles';

interface ISelectComponentProps {
  active: string;
  valueArray?: string[];
  handleStateChange: (newState: string) => void;
  type: string;
  enumValues?: string[];
}

const SelectComponent: React.FC<ISelectComponentProps> = ({
  active,
  valueArray,
  handleStateChange,
  type,
  enumValues
}) => {
  const classes = useStyles();

  let renderArray;
  let renderEnum;

  if (valueArray != null) {
    renderArray = valueArray.map((value) => {
      return (
        <MenuItem key={value} value={value} className={classes.menuItemChooseType}>
          {value}
        </MenuItem>
      );
    });
  }

  if (enumValues != null) {
    if (type === 'event') {
      renderEnum = enumValues.map((value) => {
        return (
          <MenuItem key={value} value={value} className={classes.menuItemChooseType}>
            <FormattedMessage id={`app.findbanner.event.${value}`} />
          </MenuItem>
        );
      });
    } else if (type === 'time') {
      renderEnum = enumValues.map((value) => {
        return (
          <MenuItem key={value} value={value} className={classes.menuItemChooseType}>
            <FormattedMessage id={`app.findbanner.time.${value}`} />
          </MenuItem>
        );
      });
    }
  }

  const handleChange = (newState: string): void => {
    handleStateChange(newState);
  };

  return (
    <FormControl>
      <Select
        size="small"
        value={active}
        sx={{
          '& .MuiSvgIcon-root': {
            color: 'white'
          },
          fontSize: '25px',
          fontWeight: 'bold',
          color: '#017CCC'
        }}
        className={classes.selectType}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        MenuProps={{
          MenuListProps: {
            disablePadding: true
          }
        }}
        fullWidth>
        {renderArray}
        {renderEnum}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
