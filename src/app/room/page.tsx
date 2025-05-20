'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Play() {
    const [roomCode, setRoomCode] = useState('');
    const router = useRouter();

    const handleJoin = () => {
        if (roomCode.trim()) {
            router.push(`/room/${roomCode.trim()}`);
        }
    };

    const handleCreate = () => {
        const newRoomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        router.push(`/room/${newRoomCode}`);
    };

    return (
        <div className='min-h-[calc(100vh-102px)] flex flex-col items-center pt-24'>
            <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-10 w-full max-w-md flex flex-col items-center gap-6'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-8 text-center'>
                    Jogar Fodinha
                </h1>

                <div className='w-full'>
                    <label htmlFor='roomCode' className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                        Inserir código da sala
                    </label>
                    <input
                        id='roomCode'
                        type='text'
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        placeholder='Ex: ABC123'
                        className='w-full px-4 py-2 mb-6 rounded-lg border border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button
                        onClick={handleJoin}
                        className='w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors'
                    >
                        Entrar na Sala
                    </button>
                </div>

                <div className='relative w-full border-t border-gray-300 dark:border-gray-700'>
                    <span className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 px-2 text-sm text-gray-500'>
                        ou
                    </span>
                </div>

                <button
                    onClick={handleCreate}
                    className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors'
                >
                    Criar Nova Sala
                </button>
            </div>
        </div>
    );
}
