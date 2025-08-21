export default [
    { id: "openmpi-install-arch", title: "Install OpenMPI (Arch)", language: "bash", description: "One-liner for Arch/Manjaro.", code: `sudo pacman -S openmpi` },
    { id: "hello-mpi", title: "Hello MPI (C++)", language: "cpp", description: "Minimal C++ hello for MPI.", code: `#include <mpi.h>
#include <cstdio>
int main(int argc, char** argv){
  MPI_Init(&argc,&argv);
  int r,s; MPI_Comm_rank(MPI_COMM_WORLD,&r); MPI_Comm_size(MPI_COMM_WORLD,&s);
  std::printf("Hello from %d/%d\n", r, s);
  MPI_Finalize();
}` }
] as const;
