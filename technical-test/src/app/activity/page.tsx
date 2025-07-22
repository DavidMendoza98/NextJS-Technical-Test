"use client";
import { useAuth } from "@/context/auth";
import { Protected } from "@/components/protected_components";
import { useEffect, useState } from "react";
import { Log } from "@/types/log.interface";
import Spinner from "@/components/spinner";

const Activity = () => {
  // Import context
  const { user, token } = useAuth();
  // States
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);

  // Get data from API, get one time only on the mount.
  useEffect(() => {
    // Despite this low <Protected/> that checks the auth context, it is validated to avoid errors.
    if (!user) return;
    // To obtain data, fetch is used because it is the only area that needs this resource.
    const fetchLogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/logs/${user.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setLogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [token, user]);

  if (loading) return <Spinner label="Cargando actividad" />;

  return (
    <Protected>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <h2 className="text-xl font-semibold text-gray-900">
              Registro de Actividad
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {logs.length} registros
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Log
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {logs.length === 0 ? (
                  <tr>
                    <td className="px-6 py-12 text-center text-gray-500">
                      No hay logs disponibles
                    </td>
                  </tr>
                ) : (
                  logs.map((log, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{log.log}</div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Protected>
  );
};
export default Activity;
