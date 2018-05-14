// Automatically Generated at 2018-05-04T11:15:44-07:00
// tslint:disable:interface-name

export interface Query {
  /* @param userId - user ID@return - user with given ID */
  user?: User | null;
  /* @param filter - filter to filter the users by@return - list of users having a display name or upn containing the filter provided */
  users?: User[] | null;
  /* @param convId - conversation ID to search by@return - list of messages within the conversaton having the provided ID */
  messages?: Message[] | null;
  /* @return - list of all 1:1 conversations for the current user */
  chats?: Conversation[] | null;
  /* @param convId - conversation ID to search by@return - 1:1 conversaton having the privided ID */
  chat?: Conversation | null;
  /* @param userId - user ID to search by@return - 1:1 conversation having only 2 members; one of which is the provided user */
  chatWithUser?: Conversation | null;
}

export interface User {
  id: string;
  displayName?: string | null;
  email?: string | null;
  department?: string | null;
  givenName?: string | null;
  isEnabled?: boolean | null;
  isMuted?: boolean | null;
  jobTitle?: string | null;
  mail?: string | null;
  mobile?: string | null;
  role?: string | null;
  physicalDeliveryOfficeName?: string | null;
  sipProxyAddress?: string | null;
  surname?: string | null;
  telephoneNumber?: string | null;
  type?: string | null;
  userSubType?: string | null;
  userPrincipalName?: string | null;
  userType?: string | null;
}

export interface Message {
  id?: string | null;
  content?: string | null;
  originalArrivalTime?: string | null;
  imDisplayName?: string | null;
  from?: string | null;
  messageType?: string | null;
  contentType?: string | null;
  activityType?: string | null;
  clientMessageId?: string | null;
}

export interface Conversation {
  /* &gt;&gt;&gt; @client */
  activeCallsCount?: number | null;
  botBlockString?: string | null;
  datatid?: string | null;
  displayName?: string | null;
  hasActiveCalls?: boolean | null;
  hasFailedMessages?: boolean | null;
  otherMemberMris?: string[] | null;
  pictureGroup?: PictureGroup[] | null;
  isSfB?: boolean | null;
  isNewChat?: boolean | null;
  isBotBlocked?: boolean | null;
  isBotUser?: boolean | null;
  isFederated?: boolean | null;
  isHidden?: boolean | null;
  pictureUpn?: string | null;
  pinnedIndex?: number | null;
  showAtMention?: boolean | null;
  showMarkers?: boolean | null;
  tooltipTitle?: string | null;
  longTitle?: string | null;
  messagePreview?: string | null;
  messagePreviewAria?: string | null;
  isLastMessageText?: boolean | null;
  isLastMessageTime?: string | null;
  isMeeting?: boolean | null;
  /* &gt;&gt;&gt; @server */
  id: string;
  lastMessage?: Message | null;
  title?: string | null;
  isOneOnOne?: boolean | null;
  members?: User[] | null;
  isRead?: boolean | null;
}

export interface PictureGroup {
  userId?: string | null;
  displayName?: string | null;
}

export interface Mutation {
  /* @param convId - conversation ID to attach the message to@param text - text of the message@return - message sent having the privided ID */
  sendTextMessage?: Message | null;
  /* @param userId - user ID to start the conversation with@param text - text of the message@return - 1:1 conversaton having the privided ID */
  sendMessageToUser?: Conversation | null;
}
