export function InputRender(field) {

  const {
    input,
    type,
    placeholder,
    meta: { error, touched },
  } = field;
  return (
    <div>
      <input type={type} placeholder={placeholder} {...input} />
      {touched && error && <div>{error}</div>}
    </div>
  );
}
