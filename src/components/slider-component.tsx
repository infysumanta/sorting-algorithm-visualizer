import { MAX_ANIMATION_SPEED, MNI_ANIMATION_SPEED } from "@/lib/utils";

/**
 * A slider component used for selecting a value within a range.
 *
 * @param min - The minimum value of the slider. Defaults to MNI_ANIMATION_SPEED.
 * @param max - The maximum value of the slider. Defaults to MAX_ANIMATION_SPEED.
 * @param step - The step value for the slider. Defaults to 10.
 * @param value - The current value of the slider.
 * @param handleChange - A function that handles the change event of the slider.
 * @param isDisabled - A flag indicating whether the slider is disabled. Defaults to false.
 * @returns The SliderComponent JSX element.
 */
export default function SliderComponent({
  min = MNI_ANIMATION_SPEED,
  max = MAX_ANIMATION_SPEED,
  step = 10,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}) {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="text-center text-gray-300">Slow</span>
      <input
        disabled={isDisabled}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => handleChange(e)}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
      />
      <span className="text-center text-gray-300">Fast</span>
    </div>
  );
}
