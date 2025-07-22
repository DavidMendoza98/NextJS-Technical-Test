// hooks/useCities.ts
import { useState, useEffect } from 'react';
import { City } from '@/types/city.interface';
import { toast } from 'sonner';

export const useCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cities/get`);
        const data = await response.json();
        setCities(data);
      } catch (err) {
        toast.error('Oops!, no se puede cargar, error:EF-101')
        setError([JSON.stringify(err)])
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []); // Array vacío = solo se ejecuta una vez

  return { cities, loading, error };
};