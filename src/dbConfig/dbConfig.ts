import mongoose from 'mongoose';

export async function connect() {
    try{
            mongoose.connect(process.env.MONGO_URI!)
            const connection = mongoose.connection;

            connection.on('connected', () => {
                console.log('Database Connected Successfully');
            })
            connection.on('error', (err) => {
                console.log('Database Connection Failed' + err);
                process.exit();
            })

    }catch(error: any){
        console.log('Error');
        console.log(error);
    }
}