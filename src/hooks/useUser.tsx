import {useState, useEffect} from 'react';

export interface User{
    id: string,
    name: string,
    email: string,
    phone: string,
    bonusUP: number,
    avatar?: string
}

export const useUser = ()=>{
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null> (null);

    useEffect(()=>{
        const fetchData = async ()=> {
            try{
                setIsLoading(true);

                const user: User = {
                    id: 'UA523189',
                    name: 'Oleksii Skoryk',
                    email: "aleks.skoryk@gmail.com",
                    phone: "+380635872033",
                    bonusUP: 176,

                };
                setTimeout(()=> {
                    setUser(user);
                    setIsLoading(false);
                }, 1000);
            }catch(e){
                setError('error fetching user data')
                console.error(e);
            }
            
        }
        fetchData();
    }, [])

    const refreshUser = async ()=> {

    }

    return {user, isLoading, error, refreshUser};
}