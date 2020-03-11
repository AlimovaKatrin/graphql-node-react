import mongoose from 'mongoose';
import { User } from 'src/types/graph';

const userSchema = new mongoose.Schema({
    name: String,
    surName: String,
    nik: String,
    password: String,
    email: String

});

userSchema.statics.createSafefully = async ({ }: User): Promise<void> => {

}

userSchema.statics.updateSafefully = async ({ }: User): Promise<void> => {

}

export default mongoose.model('Users', userSchema);