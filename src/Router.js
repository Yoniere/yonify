import { AppHeader } from './cmps/AppHeader'
import { TopNav } from './cmps/TopNav'
import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { YourLibrary } from './pages/YourLibrary'


export const pathes = [
    {
    path:'/yonify',
    element:<Home/>
    },
    {path:'/search',
    element:<Search/>
    },
    {path:'/yourlibrary',
    element:<YourLibrary/>
    }
]