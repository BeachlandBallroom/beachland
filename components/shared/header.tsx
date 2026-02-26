import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import {Button} from '../ui'
import { User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-2'>
                {/* {Левая часть} */}
                <div className="flex items-center gap-4">
                    <Image src="/logo1.jpg" alt="Logo" width={55} height={55} />
                    <div>
                        <h1 className="text-2xl uppercase font-black">Beachland</h1>
                    </div>
                </div>

                {/* {Правая часть} */}
                <div className="flex items-center gap-3">
                    <Button variant={'outline'} className='flex item-center gap-2'>
                        <User size={35}/>
                        Войти
                    </Button>
                </div>
            </Container>
        </header>
    );
}
