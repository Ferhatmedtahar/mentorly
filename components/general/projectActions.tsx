"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface ProjectActionsProps {
  readonly projectId: string;
  readonly projectSlug: string;
  readonly isOwner: boolean;
}

export default function ProjectActions({
  projectId,
  projectSlug,
  isOwner,
}: ProjectActionsProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  if (!isOwner) return null;

  const handleEdit = () => {
    router.push(`/projects/${projectSlug}/edit`);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      // Call your delete API
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      toast.success("Project deleted successfully");
      router.push("/projects?sort=created_at&order=desc&page=1");
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    } finally {
      setIsDeleting(false);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="cursor-pointer border bg-transparent text-yellow-600 hover:text-yellow-700 dark:border-yellow-500 dark:text-yellow-500 hover:bg-yellow-50 dark:hover:text-yellow-600 dark:hover:bg-yellow-900/30"
          onClick={handleEdit}
        >
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <Button
          size="sm"
          className="cursor-pointer border border-red-600 dark:border-red-900 text-red-600 bg-transparent hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
          onClick={() => setIsDeleteDialogOpen(true)}
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </div>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md bg-primary-50/95 drop-shadow-2xl  dark:bg-primary-700/60">
          <DialogHeader>
            <DialogTitle className="sub-heading dark:sub-heading dark:text-white !text-black">
              Delete Project
            </DialogTitle>
            <DialogDescription className="dark:text-slate-300 text-slate-600">
              Are you sure you want to delete this project? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
            <Button
              variant="outline"
              className="dark:hover:bg-slate-300 hover:bg-primary-200 border-primary-900 cursor-pointer"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-500 hover:bg-red-600 cursor-pointer"
            >
              {isDeleting ? "Deleting..." : "Delete Project"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
