interface TypesForm {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatedPassword: string;
  };
  errors: {
    [key: string]: string;
  };
}

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatedPassword: string;
}

type typesOfErrors = {
  [key: string]: string;
};

export type { TypesForm, Values, typesOfErrors };
