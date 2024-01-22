type User = {
  user_id: number;
  user_name: string;
  email: string;
  role: 'user' | 'admin';
  password: string;
};

type Cat = {
  // TODO: create a cat type
  // owner should be a User or a number
  cat_id: number;
  cat_name: string;
  weight: number;
  filename: string;
  birthdate: string; // Assuming birthdate is a string in "YYYY-MM-DD" format
  lat: number;
  lng: number;
  owner: User | number;
};

export {Cat};

export {User};
