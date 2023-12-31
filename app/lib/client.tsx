import PocketBase from 'pocketbase';

type Props = {
  personalId: string,
  name: string,
  email: string,
  comment: string
}

export const addComments = async (commentPost: Props) =>  {
  const pb = new PocketBase('http://127.0.0.1:8090');

  const record = await pb.collection('comments').create(commentPost);

  return {
    record
  }
}


export const getComment = async () => {
  const pb = new PocketBase('http://127.0.0.1:8090');

  pb.autoCancellation(false);

  const record = await pb.collection('comments').getFullList()

  return {
    record
  }
}
