
import React from 'react';
import { ProjectWithStage, ProjectStage } from './types';
import { CheckCircle2, Clock, Flag, MessageSquare, Plus } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface ProjectStageColumnProps {
  stage: ProjectStage;
  projects: ProjectWithStage[];
  onDragStart: (project: ProjectWithStage) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (stage: ProjectStage) => void;
  onEdit: (project: ProjectWithStage) => void;
  onMoveNext: (projectId: string) => void;
  onAddNew?: () => void;
}

const ProjectStageColumn: React.FC<ProjectStageColumnProps> = ({
  stage,
  projects,
  onDragStart,
  onDragOver,
  onDrop,
  onEdit,
  onMoveNext,
  onAddNew
}) => {
  const renderStageIcon = (stage: ProjectStage) => {
    switch (stage) {
      case 'planning':
        return <Flag className="h-5 w-5 text-primary" />;
      case 'inProgress':
        return <Clock className="h-5 w-5 text-muted-foreground" />;
      case 'review':
        return <MessageSquare className="h-5 w-5 text-muted-foreground" />;
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };
  
  const renderStageLabel = (stage: ProjectStage) => {
    switch (stage) {
      case 'planning':
        return 'Planning';
      case 'inProgress':
        return 'In Progress';
      case 'review':
        return 'Under Review';
      case 'completed':
        return 'Completed';
      default:
        return '';
    }
  };
  
  const renderStageColor = (stage: ProjectStage) => {
    switch (stage) {
      case 'planning':
        return 'bg-primary/10 text-primary border-border';
      case 'inProgress':
        return 'bg-muted text-muted-foreground border-border';
      case 'review':
        return 'bg-muted text-muted-foreground border-border';
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-200';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-200';
    }
  };

  const stageProjects = projects.filter(project => project.stage === stage);

  return (
    <div 
      className="space-y-4"
      onDragOver={onDragOver}
      onDrop={() => onDrop(stage)}
    >
      <div className={`flex items-center justify-between p-3 rounded-lg ${renderStageColor(stage)} border`}>
        <div className="flex items-center gap-2">
          {renderStageIcon(stage)}
          <h3 className="font-medium">{renderStageLabel(stage)}</h3>
        </div>
        
        {stage === 'planning' && onAddNew && (
          <button 
            onClick={onAddNew}
            className="p-1 rounded-full hover:bg-background/80"
          >
            <Plus size={18} />
          </button>
        )}
      </div>
      
      <div className="space-y-3 min-h-[200px]">
        {stageProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onDragStart={onDragStart}
            onEdit={onEdit}
            onMoveNext={onMoveNext}
            stage={stage}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectStageColumn;
