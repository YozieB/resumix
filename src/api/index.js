import { Client, Account, ID, Databases } from 'appwrite'

// API Setup
const endpointURL = 'https://cloud.appwrite.io/v1'
const projectID = '6480ed579d9260672d57'
const client = new Client()
    .setEndpoint(endpointURL)
    .setProject(projectID)
const databases = new Databases(client);

export const getUsers = () => {

}
