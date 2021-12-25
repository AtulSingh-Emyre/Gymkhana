import moment from "moment";

export interface IEvent 
    {
        id: number,
        title:string,
        council:string,
        start: string,
        end: string,
        organiser: string,
        description: string,
        venue: string,
        poster: string,
        result: string,
        notice: boolean,
        allDay? : boolean
    }

export class EventsSingleton {
    private static instance: EventsSingleton;
    private static eventsList: IEvent[] = [
        {
            id:0,
            council: 'Technical',
            title: '12345678901234567890',
            organiser: 'AI Club',
            start: moment().add(1, 'days').format('MMMM Do YYYY, h:mm:ss a'),
            end: moment().add(3, 'days').format('MMMM Do YYYY, h:mm:ss a'),
            venue: 'Room 23',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
            poster: 'www.google.com',
            result: 'www.google.com',
            notice: true,
            allDay: true
        },
        {
            id:1,
            council: 'Sports',
            title: 'Weekly Gambit arena',
            organiser: 'Chess Club',
            start: moment().startOf('day').format('MMMM Do YYYY, h:mm:ss a'),
            end: moment().endOf('day').format('MMMM Do YYYY, h:mm:ss a'),
            venue: 'Board games room',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
            poster: 'www.google.com',
            result: 'www.google.com',
            notice: true,
            allDay: true,
        }, {
            id:2,
            council: 'Technical',
            title: 'land rover making',
            organiser: 'Robotics Club',
            start: moment().add(3, 'days').format('MMMM Do YYYY, h:mm:ss a'),
            end: moment().add(4, 'days').format('MMMM Do YYYY, h:mm:ss a'),
            venue: 'Room 23',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
            poster: 'www.google.com',
            result: 'www.google.com',
            notice: true
        }, {
            id:3,
            council: 'Technical',
            title: 'land rover making',
            organiser: 'Robotics Club',
            start: moment().add(3, 'days').format('MMMM Do YYYY, h:mm:ss a'),
            end: moment().add(4, 'days').format('MMMM Do YYYY, h:mm:ss a'),
            venue: 'Room 23',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
            poster: 'www.google.com',
            result: 'www.google.com',
            notice: true
        }
      ];
    private constructor() { }
    public static getInstance(): EventsSingleton {
        if (!EventsSingleton.instance) {
            EventsSingleton.instance = new EventsSingleton();
        }
        return EventsSingleton.instance;
    }
    public addEvent(event : IEvent) {
        EventsSingleton.eventsList.push({...event, id:EventsSingleton.eventsList.length});
    }
    public getAllEvents() {
        return EventsSingleton.eventsList;
    }
    public getEvent(id : number) {
        var result: IEvent | null = null;
        EventsSingleton.eventsList.forEach(element => {
            if(element.id === id) result = element;
        });
        return result;
    }
}
