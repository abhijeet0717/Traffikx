
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ProjectWithStage } from './types';

interface ProjectEditorProps {
  project: ProjectWithStage;
  onSave: () => void;
  onCancel: () => void;
  onChange: (updatedProject: ProjectWithStage) => void;
}

const ProjectEditor: React.FC<ProjectEditorProps> = ({ 
  project, 
  onSave, 
  onCancel, 
  onChange 
}) => {
  return (
    <Card className="w-full border-border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle className="text-foreground">Edit Project</CardTitle>
        <CardDescription className="text-muted-foreground">
          Update your project information and details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="projectTitle" className="text-base text-foreground">Project Title</Label>
          <Input 
            id="projectTitle" 
            value={project.title}
            onChange={(e) => onChange({...project, title: e.target.value})}
            placeholder="Enter project title"
            className="bg-background border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectDescription" className="text-base text-foreground">Description</Label>
          <Input 
            id="projectDescription" 
            value={project.description}
            onChange={(e) => onChange({...project, description: e.target.value})}
            placeholder="Enter project description"
            className="bg-background border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 bg-card border-t border-border">
        <Button variant="outline" onClick={onCancel} className="border-border text-foreground hover:bg-muted">
          Cancel
        </Button>
        <Button onClick={onSave} className="bg-primary text-primary-foreground hover:bg-primary/90">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectEditor;
