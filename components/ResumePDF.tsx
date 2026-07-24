import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { profile } from '@/data/profile';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    fontSize: 10,
  },
  link: {
    color: 'blue',
    textDecoration: 'none',
    marginHorizontal: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottom: '1px solid #eee',
    paddingBottom: 3,
    fontFamily: 'Helvetica-Bold',
  },
  listItem: {
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  itemSubtitle: {
    fontSize: 10,
    color: 'gray',
  },
  itemContent: {
    fontSize: 10,
    marginTop: 3,
  },
  projectContainer: {
    marginBottom: 10,
  },
  skillCategory: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Helvetica-Bold',
  },
  skills: {
    fontSize: 10,
    color: '#333',
  },
});

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.subtitle}>{profile.roles.join(' / ')}</Text>
        <View style={styles.contactInfo}>
          <Text>{profile.location}</Text>
          <Text> | </Text>
          <Link style={styles.link} src={`mailto:${profile.email}`}>{profile.email}</Link>
          <Text> | </Text>
          <Link style={styles.link} src={profile.linkedin}>LinkedIn</Link>
          <Text> | </Text>
          <Link style={styles.link} src={profile.github}>GitHub</Link>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        {profile.bio.map((paragraph, index) => (
          <Text key={index} style={styles.itemContent}>{paragraph}</Text>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((edu, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.itemTitle}>{edu.institution}</Text>
            <Text style={styles.itemSubtitle}>{edu.degree} ({edu.duration})</Text>
            {edu.achievements.map((ach, i) => (
              <Text key={i} style={styles.itemContent}>- {ach}</Text>
            ))}
          </View>
        ))}
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experience.map((exp, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.itemTitle}>{exp.role}</Text>
            <Text style={styles.itemSubtitle}>{exp.organization} ({exp.duration})</Text>
            {exp.points.map((point, i) => (
              <Text key={i} style={styles.itemContent}>- {point}</Text>
            ))}
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.filter(p => p.featured).slice(0, 4).map((proj, index) => (
          <View key={index} style={styles.projectContainer}>
            <Text style={styles.itemTitle}>{proj.title}</Text>
            <Text style={styles.itemContent}>{proj.description}</Text>
            <Text style={styles.itemSubtitle}>Tech: {proj.tags.join(', ')}</Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {skillGroups.map((group, index) => (
          <View key={index}>
            <Text style={styles.skillCategory}>{group.category}</Text>
            <Text style={styles.skills}>{group.items.join(', ')}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);