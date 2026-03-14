"use client";
import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import {Button} from '../ui'
import { User } from 'lucide-react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    const router = useRouter();

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
                    <Button variant={'outline'} className='flex item-center gap-2' onClick={() => router.push('/login')}>
                        Log In
                    </Button>
                    <Button variant={'default'} className='flex item-center gap-2' onClick={() => router.push('/register')}>
                        Sign Up
                    </Button>
                </div>
            </Container>
        </header>
    );
}
