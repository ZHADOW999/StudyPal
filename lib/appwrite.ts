import { Platform } from 'react-native';
import { Client, Account, ID, Databases, Storage } from 'react-native-appwrite';



export const config ={
    Platform:'com.studypal',
    endpoint: process.env.PROJECT_ENDPOINT,
    projectid: process.env.PROJECT_ID,
    storageID: process.env.STORAGE_ID,
    databaseId: process.env.DATABASE_ID,
    userDatabaseId: process.env.USER_DATABASE_ID,
}

export const client = new Client()

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectid!)
    .setPlatform(config.Platform);
    
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const createUser = async (email:string,password:string)=>{
try{    const newAccount = await account.create(ID.unique(),email,password)
    return newAccount}
    catch(err){
        console.error('Error creating user:',err)
    }
}
// Helper function to create a new user
export const createUserDocument = async (
    userId:string,
    fullName:string,
    matricNumber:string,
    course:string,
    roles:string[],
)=>{
    try{
        if (!config.userDatabaseId || !config.databaseId) {
            throw new Error("Database IDs must be defined");
        }
        const profile= await databases.createDocument(config.userDatabaseId, config.databaseId, ID.unique(), {
            userId: userId,
            fullName,
            matricNumber,
            course,
            roles,
            privacy_policy: true,
        });
        return profile
    }catch(err){    
        console.error("Error creating user profile:", err)
        throw err
    }
}


// Helper function to login
export const loginUser = async (email: string, password: string) => {
    try {
      const session = await account.createSession(email, password)
      return session
    } catch (error) {
      console.error("Error logging in:", error)
      throw error
    }
  }
  
  // Placeholder for supabase - as it is required by other files
  export const supabase = {
    auth: {
      signOut: async () => {
        console.log("Supabase sign out called (placeholder)")
        return Promise.resolve()
      },
    },
  }