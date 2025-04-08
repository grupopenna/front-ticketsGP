import { Skeleton, Box, IconButton, Button } from "@mui/material";
import { Clear } from "@mui/icons-material";

export const TicketModalSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column" width="80%" maxWidth="lg" mx="auto" p={2} boxShadow={3} borderRadius={2} bgcolor="background.paper">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2} borderBottom={1} borderColor="divider">
        <Skeleton variant="text" width={200} height={30} />
        <IconButton disabled>
          <Clear />
        </IconButton>
      </Box>
      
      {/* Contenido */}
      <Box display="flex" height="70vh">
        {/* Sección Izquierda */}
        <Box flex={2} p={2} borderRight={1} borderColor="divider" display="flex" flexDirection="column" gap={2}>
          {/* Descripción */}
          <Skeleton variant="text" width={150} height={20} />
          <Skeleton variant="rectangular" width="100%" height={80} />
          <Skeleton variant="rectangular" width={100} height={40} />
          
          {/* Usuarios */}
          <Skeleton variant="text" width={180} height={20} />
          <Skeleton variant="rectangular" width="100%" height={50} />
          
          {/* Comentarios */}
          <Skeleton variant="text" width={150} height={20} />
          <Skeleton variant="rectangular" width="100%" height={100} />
        </Box>
        
        {/* Sección Derecha */}
        <Box flex={1} p={2} display="flex" flexDirection="column" gap={2}>
          <Skeleton variant="text" width={180} height={20} />
          <Button variant="contained" disabled>Registrar Tiempo</Button>
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
        </Box>
      </Box>
    </Box>
  );
};