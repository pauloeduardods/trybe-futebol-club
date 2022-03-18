import Bcrypt = require('bcryptjs');

class Password {
  static async hash(password: string): Promise<string> {
    const salt = await Bcrypt.genSalt(10);
    return Bcrypt.hash(password, salt);
  }

  static async compare(password: string, hash: string): Promise<boolean> {
    return Bcrypt.compare(password, hash);
  }
}

export default Password;
