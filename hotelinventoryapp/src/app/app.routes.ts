import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: 'todos',
        loadComponent: () => import('./todos/todos').then(m => m.Todos),
        children: [
            {
                path: 'completed-items',
                loadComponent: () => import('./components/completed-items-list-component/completed-items-list-component').then(m => m.CompletedItemsListComponent),
                
            },
            {
                path: 'high-priority',
                loadComponent: () => import('./todos/high-priority-todos-component/high-priority-todos-component').then(m => m.HighPriorityTodosComponent),
            }
        ]
    },
    {
        path: 'rooms',
        loadComponent: () => import('./rooms/rooms-component/rooms-component').then(m => m.RoomsComponent),
        children: [
            {   
                path: 'available-rooms',
                loadComponent: () => import('./rooms/available-rooms-component/available-rooms-component').then(m => m.AvailableRoomsComponent),

            },

            {   
                path: 'booked-rooms',
                loadComponent: () => import('./rooms/booked-rooms-component/booked-rooms-component').then(m => m.BookedRoomsComponent),

            }
        ]
    }
];
