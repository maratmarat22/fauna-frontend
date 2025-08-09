import { ChangeEventHandler } from 'react';
import { useFormStatus } from 'react-dom';
import { FiAlertCircle } from 'react-icons/fi';
import type { Option } from './data/types';

export const Submit = ({ cooldownLeft }: { cooldownLeft: number }) => {
  const { pending } = useFormStatus();
  const disabled = pending || cooldownLeft > 0;

  return (
    <button
      type="submit"
      disabled={disabled}
      className="bg-main hover:bg-main-hover rounded-md px-6 py-3 text-base font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:bg-neutral-500 disabled:hover:bg-neutral-500"
    >
      Отправить
    </button>
  );
};

export const RequiredCircle = () => {
  return (
    <abbr className="text-main" title="Обязательно">
      <FiAlertCircle />
    </abbr>
  );
};

export const Select = ({
  name,
  label,
  required = false,
  handleChange,
  defaultValue,
  options,
}: {
  name: string;
  label: string;
  required?: boolean;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
  defaultValue?: string;
  options: Option[];
}) => {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium">
      {required ? (
        <div className="flex items-center gap-2">
          {label}
          <RequiredCircle />
        </div>
      ) : (
        <span>{label}</span>
      )}
      <select
        name={name}
        className="form-input mt-1 p-2"
        onChange={handleChange}
        defaultValue={defaultValue}
        required={required}
      >
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
};
