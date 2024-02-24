interface IStepIndicatorProps {
  active: number;
}
interface IResultRegistrationProps {
  result: boolean;
}
interface IPersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
}
interface IPersonalInfoProps {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  handleChange: (event: ChangeEvent<HTMLInputElement | { value: string; name?: string }>) => void;
  handleDateChange: (value) => void;
}
