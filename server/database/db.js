import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb+srv://namithakur:GVDLlO0ieUF5HvBG@cluster0.sllg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ;
    try {
        await mongoose.connect(URL)
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
