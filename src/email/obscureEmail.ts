export const obscureEmail = (email: string): string => {
    const [username, domain] = email.split('@');
    const obscurationCharacters = '******';
    const visibleUsernameCharacters = 3;
  
    const obscuredUsername =
      username.substring(0, visibleUsernameCharacters) + obscurationCharacters;
  
    return `${obscuredUsername}@${domain}`;
  };