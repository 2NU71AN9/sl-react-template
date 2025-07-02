export function useTwoWayBind<T = string>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const bind = {
    value,
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const target = e.target as HTMLInputElement;
      let newValue: T;
      if (target.type === "checkbox") {
        // 如果是 checkbox，返回 boolean 类型
        newValue = target.checked as unknown as T;
      } else if (target.type === "number") {
        // 如果是 number 类型，返回 number 类型
        newValue = parseFloat(target.value) as unknown as T;
      } else {
        // 否则返回 string 类型
        newValue = target.value as unknown as T;
      }
      setValue(newValue);
    },
  };
  return [value, setValue, bind] as const;
}
