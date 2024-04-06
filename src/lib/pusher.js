import Pusher from 'pusher';

const pusher = new Pusher({
  appId:"1693142",
  key: "b937bfa0f78dc36ad1aa",
  secret:"be65cdc9f6d217af08e6",
  cluster: "eu",
  useTLS: true,
});
export default pusher;
