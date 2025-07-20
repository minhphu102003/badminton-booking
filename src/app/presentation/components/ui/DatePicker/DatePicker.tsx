'use client';

import { useEffect, useRef, useState } from 'react';
import './DatePicker.scss';
import { formatDateRangeString } from '@/app/shared/utils/format';

type Props = {
  onChange: (value: string) => void;
};

export default function DateTimePicker({ onChange }: Props) {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('1');
  const [ampm, setAmpm] = useState<'AM' | 'PM'>('AM');
  const [duration, setDuration] = useState(1);
  const [dateInputType, setDateInputType] = useState<'text' | 'date'>('text');
  const [tempDate, setTempDate] = useState('');
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [hasSelectedHour, setHasSelectedHour] = useState(false);

  const handleDateSelect = (value: string) => {
    setDate(value);
    setTempDate(value);
    handleChange('date', value);
  };

  useEffect(() => {
    dateInputRef.current?.focus();
  }, []);

  const handleChange = (field: 'date' | 'hour' | 'ampm' | 'duration', value: string | number) => {
    const newValues = {
      date,
      hour,
      ampm,
      duration,
      [field]: value,
    };

    setDate(newValues.date);
    setHour(newValues.hour);
    setAmpm(newValues.ampm);
    setDuration(Number(newValues.duration));

    if (field === 'hour') {
      setHasSelectedHour(true);
    }

    if (newValues.date) {
      const result = formatDateRangeString(
        newValues.date,
        newValues.hour,
        newValues.ampm,
        Number(newValues.duration),
      );
      onChange(result);
    }
  };

  return (
    <div className="datetime-picker shadow p-3 bg-white">
      <div className="text-start">
        <label className="form-label">Select Date</label>
        <input
          ref={dateInputRef}
          type={dateInputType}
          className="form-control mb-2"
          placeholder="Date"
          value={tempDate}
          onFocus={() => {
            setDateInputType('date');
          }}
          onBlur={(e) => {
            if (!e.target.value) {
              setDateInputType('text');
            }
          }}
          onChange={(e) => handleDateSelect(e.target.value)}
        />
      </div>
      <div className="text-start">
        <label className="form-label">Select Time</label>
        <div className="d-flex gap-2 mb-2">
          <select
            className="form-select"
            value={hour}
            onChange={(e) => handleChange('hour', e.target.value)}
            disabled={!date}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
              <option key={h} value={h}>
                {h + ' : 00'}
              </option>
            ))}
          </select>

          <select
            className="form-select"
            value={ampm}
            onChange={(e) => handleChange('ampm', e.target.value)}
            disabled={!date || !hasSelectedHour}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>

          <select
            className="form-select"
            value={duration}
            onChange={(e) => handleChange('duration', Number(e.target.value))}
            disabled={!date || !hasSelectedHour}
          >
            {Array.from({ length: 6 }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>
                {d} hour{d > 1 && 's'}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
