import React from "react";

interface Props {}

const EmailForm: React.FC<Props> = (props: Props) => {
  const {} = props;
  return (
    <>
      <p>
        If you would like to receive updates about future Kuratorium activities, submit your email
        address here.
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className="mb-6">
        <label htmlFor="email">Email Address:</label>
        <input name="email" type="text" id="email" />

        <input type="submit" name="submit" value="submit" />
      </form>
    </>
  );
};
export default EmailForm;
