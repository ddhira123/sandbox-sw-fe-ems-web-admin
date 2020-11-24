import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const CustomSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 10px !important;
    font-size: 14px;
  }
`;
export { Option };
export default CustomSelect;
