//Auth
export const REGISTER_USER = '/auth/register';
export const LOGIN = '/auth/login';
export const FORGOT_PASSWORD = '/auth/forgot-password';
export const RESET_PASSWORD = '/auth/reset-password';

//Create Event
export const CREATE_EVENT = '/events/create';
export const EVENT_TYPES = '/events/types';
export const GET_EVENT = '/events/events';
export const GET_EVENT_TYPE = '/events/types';
export const GET_EVENT_BY_ID = (id)  =>  `/events/${id}`;
export const GET_ALL_EVENTS = '/public-events';
export const GET_EVENT_BY_TYPE = (event_type_id) => `/events/type/${event_type_id}`;