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
        <header className={cn('border-b border-muted-foreground', className)}>
            <Container className='flex items-center justify-between py-2'>
                {/* {Left part} */}
                <div className="flex items-center gap-4">
                    <Image src="/logo1.jpg" alt="Logo" width={55} height={55} />
                    <div>
                        <Image src="logo2.svg" width={200} height={200} alt='Logo'/>
                    </div>
                </div>

                {/* {Right part} */}
                <div className="flex items-center gap-3">
                    <Button variant={'outline'} className='flex item-center gap-2'>
                        Log In
                    </Button>
                    <Button variant={'default'} className='flex item-center gap-2'>
                        Sign Up
                    </Button>
                </div>
            </Container>
        </header>
    );
}
