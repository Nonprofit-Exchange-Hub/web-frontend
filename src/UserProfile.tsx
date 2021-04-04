import React from 'react';


type User = {
  first_name: string,
  last_name: string,
  id: string,
};

const useUser = (id = 3) => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    fetch(`/user/${3}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setUser(response);
      });
  }, [id])
  
  return { user };
};

function UserProfile() {
  const { user } = useUser();
  return (
    <>
      Welcome {user?.first_name} {user?.last_name} to Nonprofit Exchange Hub!
    </>
  );
}

export default UserProfile;
