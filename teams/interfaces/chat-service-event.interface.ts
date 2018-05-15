import { IMessageFields } from './message-fields.interface';

export interface IChatServiceEventSubscription {
  chatServiceEvent: ChatServiceEvent;
}

export type ChatServiceEvent = NewMessage | MessageUpdate;

export type NewMessage = {
  __typename?: 'NewMessage';
  convId: string;
  message: Message;
};

export type Message = IMessageFields;

export type MessageUpdate = {
  __typename?: 'MessageUpdate';
  message: _Message;
};

export type _Message = IMessageFields;
